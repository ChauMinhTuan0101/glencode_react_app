import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';

import Menu from './Menu';

export default class ActionBarComponent extends Component {
    toggleDrawer = () => {
        if (this.state.drawerClosed) {
            this.DRAWER.openDrawer();
        } else {
            this.DRAWER.closeDrawer();
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            drawerClosed: true,
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.setDrawerState = this.setDrawerState.bind(this);
    };

    setDrawerState() {
        this.setState({
            drawerClosed: !this.state.drawerClosed,
        });
    };

    render() {
        return (
            <DrawerLayout
                drawerWidth={300}
                ref={drawerElement => {
                    this.DRAWER = drawerElement;
                }}
                drawerPosition={DrawerLayout.positions.left}
                onDrawerOpen={this.setDrawerState}
                onDrawerClose={this.setDrawerState}
                renderNavigationView={() => <Menu />}
            >
                <ActionBar
                    containerStyle={styles.bar}
                    backgroundColor="#33cc33"
                    leftIconName={'menu'}
                    onLeftPress={this.toggleDrawer}/>

            </DrawerLayout>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#33cc33',
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        //padding: 10
    },
});

