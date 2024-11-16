import React, {ChangeEvent, ReactNode} from 'react';
import {AppBar, Box, BoxProps, Tab, Tabs, Toolbar, Typography} from "@mui/material";

function a11yProps(index: number) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

interface TabPanelProps extends BoxProps {
    children: ReactNode,
    index: number,
    value: number,
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </Box>
    );
}

interface HeaderTabProps {
    label: string,
    content: ReactNode,
}

export interface HeaderProps {
    title: string,
    actions: ReactNode[],
    tabs: HeaderTabProps[],
}

export default function Header({title, actions, tabs}: HeaderProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: ChangeEvent<{}>, value: any): void => {
        event.preventDefault();
        setValue(value);
    };

    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" sx={{flexGrow: 1}}>{title}</Typography>
                    {actions}
                </Toolbar>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    {tabs.map((tab, i) => (
                        <Tab key={`tab${i}`} label={tab.label} {...a11yProps(i)}/>
                    ))}
                </Tabs>
            </AppBar>
            {tabs.map((tab, i) => (
                <TabPanel sx={{width: '100%'}} value={value} index={i} key={`tabpanel${i}`}>{tab.content}</TabPanel>
            ))}
        </>
    );
}
