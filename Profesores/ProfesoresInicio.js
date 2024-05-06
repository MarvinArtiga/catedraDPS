import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfesoresInicio = ({ navigation }) => {
    const renderTableCell = (content) => (
        <View style={styles.cell}>
            <Text style={styles.cellText}>{content}</Text>
        </View>
    );
    const generateScheduleRows = () => {
        const scheduleRows = [];
        let hour = 7;
        for (let i = 0; i < 8; i++) {
            scheduleRows.push(
                <View style={styles.row} key={hour}>
                    {renderTableCell(`${hour}:00 - ${hour}:45`)}
                    {renderTableCell('Clase')}
                    {renderTableCell('Clase')}
                    {renderTableCell('Clase')}
                    {renderTableCell('Clase')}
                    {renderTableCell('Clase')}
                </View>
            );
            hour++;
            if ((i + 1) % 2 === 0 && i !== 7) {
                scheduleRows.push(
                    <View style={styles.row} key={`recess-${i}`}>
                        {renderTableCell(`${hour}:00 - ${hour}:15`)}
                        {renderTableCell('Receso')}
                        {renderTableCell('Receso')}
                        {renderTableCell('Receso')}
                        {renderTableCell('Receso')}
                        {renderTableCell('Receso')}
                    </View>
                );
                hour++;
            }
        }
        return scheduleRows;
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Nombre de la Institución</Text>
            </View>
            <View style={styles.contentContainer}>
                {/* Contenedor del icono de usuario */}
                <View style={[styles.userContainer, styles.border, styles.userIconContainer]}>
                    <View style={[styles.userIcon, styles.iconStyle]}></View>
                </View>
                {/* Contenedor de la información del profesor */}
                <View style={[styles.userInfoContainer, styles.border]}>
                    <View style={styles.userInfo}>
                        <Text style={styles.userInfoTitle}>Datos del profesor</Text>
                        <Text>CARNET:</Text>
                        <Text>NOMBRE:</Text>
                        <Text>GUIA DE GRADO:</Text>
                        <Text>CORREO:</Text>
                        <Text>TELÉFONO:</Text>
                    </View>
                </View>
            </View>
            {/* Botón de "Estudiantes" */}
            <TouchableOpacity
                style={[styles.button, styles.border]}
                onPress={() => navigation.navigate('PantallaEstudiantes')}
            >
                <Text style={styles.buttonText}>Estudiantes</Text>
            </TouchableOpacity>
            <View style={[styles.scheduleTable, styles.border]}>
                <View style={[styles.row, styles.dayRow]}>
                    {renderTableCell('Hora')}
                    {renderTableCell('Lunes')}
                    {renderTableCell('Martes')}
                    {renderTableCell('Miércoles')}
                    {renderTableCell('Jueves')}
                    {renderTableCell('Viernes')}
                </View>
                {generateScheduleRows()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    headerContainer: {
        backgroundColor: 'lightblue',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    userContainer: {
        width: '100%',
        height: 100,
        marginBottom: 10,
    },
    userIconContainer: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userIcon: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: 'gray',
    },
    iconStyle: {
        alignSelf: 'center',
    },
    userInfoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
    },
    userInfo: {},
    userInfoTitle: {
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
        width: '40%',
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scheduleTable: {
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingVertical: 10,
    },
    dayRow: {
        backgroundColor: '#f2f2f2',
    },
    cell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cellText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    border: {
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default ProfesoresInicio;
