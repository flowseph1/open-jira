import { InboxOutlined, MailOutlineOutlined } from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';

const menuItems: string[] = ['Inbox', 'Starred', 'Send email', 'Drafts'];

export const Sidebar = () => {
	const { closeSideMenu, sidemenuOpen } = useContext(UIContext);

	return (
		<Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
			<Box sx={{ width: 250 }}>
				<Box sx={{ padding: '5px 10px' }}>
					<Typography variant="h4">Menu</Typography>
				</Box>
				<List>
					{menuItems.map((item, index) => {
						return (
							<ListItemButton key={index}>
								<ListItemIcon>
									{index % 2 ? <InboxOutlined /> : <MailOutlineOutlined />}
								</ListItemIcon>
								<ListItemText>{item}</ListItemText>
							</ListItemButton>
						);
					})}
				</List>

				<Divider />

				<List>
					{menuItems.map((item, index) => {
						return (
							<ListItemButton key={index}>
								<ListItemIcon>
									{index % 2 ? <InboxOutlined /> : <MailOutlineOutlined />}
								</ListItemIcon>
								<ListItemText>{item}</ListItemText>
							</ListItemButton>
						);
					})}
				</List>
			</Box>
		</Drawer>
	);
};
