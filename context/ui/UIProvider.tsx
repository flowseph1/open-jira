import { useReducer } from 'react';
import { UIContext } from './UIContext';
import { UIReducer } from './UIReducer';

export interface UIState {
	sidemenuOpen: boolean;
	isAdding: boolean;
	isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
	sidemenuOpen: false,
	isAdding: false,
	isDragging: false,
};

interface Props {
	children: JSX.Element;
}

export const UIProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

	const openSideMenu = () => {
		dispatch({ type: 'UI - Open Sidebar' });
	};

	const closeSideMenu = () => {
		dispatch({ type: 'UI - Close Sidebar' });
	};

	const setIsAdding = (payload: boolean) => {
		dispatch({ type: 'UI - Is Adding', payload });
	};

	const startDragging = () => {
		dispatch({ type: 'UI - Start Dragging' });
	};

	const endDragging = () => {
		dispatch({ type: 'UI - End Dragging' });
	};

	return (
		<UIContext.Provider
			value={{
				...state,
				openSideMenu,
				closeSideMenu,
				setIsAdding,
				startDragging,
				endDragging,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
