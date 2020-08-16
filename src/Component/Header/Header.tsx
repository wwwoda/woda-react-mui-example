import React, {ChangeEvent, ReactNode} from 'react';
import {AppBar, Box, makeStyles, Tab, Tabs, Theme, Toolbar, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({
    title: {
        flexGrow: 1,
    },
    tabPanel: {
        width: '100%',
    }
}));

function a11yProps(index: number) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

interface TabPanel {
    children: ReactNode,
    index: number,
    value: number,
    classNames: string,
}

function TabPanel(props: TabPanel) {
    const {children, classNames, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            className={classNames}
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
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
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event: ChangeEvent<{}>, value: any): void => {
        setValue(value);
    };
    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>{title}</Typography>
                    {actions}
                </Toolbar>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    {tabs.map((tab, i) => (
                        <Tab key={i} label={tab.label} {...a11yProps(i)}/>
                    ))}
                </Tabs>
            </AppBar>
            {tabs.map((tab, i) => (
                <TabPanel classNames={classes.tabPanel} value={value} index={i}>{tab.content}</TabPanel>
            ))}
        </>
    );
}
