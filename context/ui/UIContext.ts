import { createContext } from 'react';

export interface ContextProps {
	sidemenuOpen: boolean;
	isAdding: boolean;
	isDragging: boolean;
	openSideMenu: () => void;
	closeSideMenu: () => void;
	setIsAdding: (payload: boolean) => void;
	startDragging: () => void;
	endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
