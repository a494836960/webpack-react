export const SET_HEAD = 'SET_HEAD';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export function setHead (head) {
	return {type: SET_HEAD, head}
} 

export function toggleMenu(){
	return {type: TOGGLE_MENU}
}