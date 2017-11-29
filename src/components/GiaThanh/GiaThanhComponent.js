import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import {Col, Row, Rows, Table, TableWrapper} from 'react-native-table-component';

export default class TableComponent extends Component {
    render() {
        const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
        const tableTitle = ['Title', 'Title2'];
        const tableData = [
            ['', '', ''],
            ['', '', '']
        ];
        return (
            <View>
                <Table>
                    <Row data={tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
                    <TableWrapper style={{flexDirection: 'row'}}>
                        <Col data={tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
                        <Rows data={tableData} flexArr={[2, 1, 1]} style={styles.row}/>
                    </TableWrapper>
                </Table>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    head: { height: 40, backgroundColor: '#f1f8ff' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 28 },
    text: { textAlign: 'center' }
});