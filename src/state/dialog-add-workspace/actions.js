// @flow
/* eslint-disable consistent-return */
/* eslint-disable unicorn/no-null */
/* eslint-disable unicorn/consistent-function-scoping */
import type { Dispatch } from 'redux';
import { ADD_WORKSPACE_CREATE_WIKI_MESSAGE, ADD_WORKSPACE_UPDATE_FORM } from '../../constants/actions';

import validate from '../../helpers/validate';
import isUrl from '../../helpers/is-url';
import hasErrors from '../../helpers/has-errors';

import { requestCreateWorkspace } from '../../senders';

export const setWikiCreationMessage = (message: string) => ({
  type: ADD_WORKSPACE_CREATE_WIKI_MESSAGE,
  value: message,
});

const getValidationRules = () => ({
  name: {
    fieldName: 'Name',
    required: true,
  },
  homeUrl: {
    fieldName: 'Home URL',
    required: true,
    url: true,
  },
});

export const updateForm = changes => (dispatch: Dispatch, getState) => {
  const oldHomeUrl = getState().dialogAddWorkspace.form.homeUrl;

  dispatch({
    type: ADD_WORKSPACE_UPDATE_FORM,
    changes: validate(changes, getValidationRules()),
  });

  if (getState().dialogAddWorkspace.form.homeUrl === oldHomeUrl) return; // url didn't change
  if (changes.internetIcon === null) return; // user explictly want to get rid of icon
};

export const save = () => async (dispatch, getState) => {
  const { form } = getState().dialogAddWorkspace;

  dispatch(setWikiCreationMessage('正在更新工作区'));
  const validatedChanges = validate(form, getValidationRules());
  if (hasErrors(validatedChanges)) {
    return dispatch(updateForm(validatedChanges));
  }

  const url = form.homeUrl.trim();
  const homeUrl = isUrl(url) ? url : `http://${url}`;

  await requestCreateWorkspace(
    form.name,
    form.isSubWiki,
    form.mainWikiToLink,
    form.port,
    homeUrl,
    form.gitUrl,
    form.internetIcon || form.picturePath,
    Boolean(form.transparentBackground),
  );
  if (!form.isSubWiki) {
    dispatch(setWikiCreationMessage('工作区更新完毕，正在启动Wiki'));
  }
};
