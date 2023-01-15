import { AddCircleOutlineOutlined, SaveAltOutlined } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { ChangeEvent, useContext, useState } from 'react';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui/UIContext';

export const NewEntry = () => {
	const { isAdding, setIsAdding } = useContext(UIContext);

	const [inputValue, setInputValue] = useState('');

	const [touched, setTouched] = useState(false);

	const { addNewEntry } = useContext(EntriesContext);

	const onTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue(event.target.value);
	};

	const onSave = () => {
		if (inputValue.length === 0) return;
		addNewEntry(inputValue);
		setIsAdding(false);
		setTouched(false);
	};

	return (
		<Box sx={{ marginBottom: 2, paddingX: 2 }}>
			{isAdding ? (
				<>
					<TextField
						fullWidth
						sx={{ marginTop: 2, marginBottom: 1 }}
						placeholder="Nueva entrada"
						autoFocus
						multiline
						label="Nueva entrada"
						helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
						error={inputValue.length <= 0 && touched}
						value={inputValue}
						onChange={onTextChange}
						onBlur={() => setTouched(true)}
					/>
					<Box display="flex" justifyContent="space-between">
						<Button variant={'text'} endIcon={<SaveAltOutlined />} onClick={() => setIsAdding(false)}>
							Cancelar
						</Button>
						<Button
							variant={'outlined'}
							color={'secondary'}
							endIcon={<SaveAltOutlined />}
							onClick={onSave}
						>
							Guardar
						</Button>
					</Box>
				</>
			) : (
				<Button
					startIcon={<AddCircleOutlineOutlined />}
					fullWidth
					variant="outlined"
					onClick={() => setIsAdding(true)}
				>
					Agregar tarea
				</Button>
			)}
		</Box>
	);
};
