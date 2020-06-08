import {createAction} from 'redux-actions';

export default {
    'RECIPES/FETCH_RECIPE_ADD': createAction('RECIPES/FETCH_RECIPE_ADD'),
    'RECIPES/FETCH_RECIPE_REMOVE': createAction('RECIPES/FETCH_RECIPE_REMOVE'),
    'RECIPES/FETCH_RECIPES_REMOVE_ALL': createAction('RECIPES/FETCH_RECIPES_REMOVE_ALL'),
    'RECIPES/FETCH_RECIPE_EDIT': createAction('RECIPES/FETCH_RECIPE_EDIT')
}