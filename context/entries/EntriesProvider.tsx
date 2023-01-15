import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { v4 as uuidv4 } from 'uuid';

interface Props {
	children: JSX.Element;
}

export interface EntriesState {
	entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description: 'Pendient: lorem',
			status: 'pending',
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description: 'En progreso: lorem',
			status: 'in-progress',
			createdAt: Date.now() - 100000000,
		},
		{
			_id: uuidv4(),
			description: 'Finalizado: lorem',
			status: 'finished',
			createdAt: Date.now() - 100000,
		},
	],
};

export const EntriesProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

	const addNewEntry = (description: string) => {
		const newEntry: Entry = {
			_id: uuidv4(),
			description,
			createdAt: Date.now(),
			status: 'pending',
		};

		dispatch({ type: '[Entry] Add-Entry', payload: newEntry });
	};

	const updateEntry = (entry: Entry) => {
		dispatch({ type: '[Entry] Entry-Updated', payload: entry });
	};

	return (
		<EntriesContext.Provider
			value={{
				...state,
				addNewEntry,
				updateEntry,
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
