import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const MainHeader = () => {
  return (
    <View style={[styles.mainHeader, styles.celestBackground]}>
      <Text style={styles.mainHeaderText}>Estudiantes</Text>
    </View>
  );
};

const Header = ({ title }) => {
  return (
    <View style={[styles.headerContainer, styles.celestBackground]}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const Content = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Estudiante 1', type: 'Estudiante' },
    { id: 2, name: 'Estudiante 2', type: 'Estudiante' },
    { id: 3, name: 'Estudiante 3', type: 'Estudiante' },
    // Agrega más estudiantes según sea necesario
  ]);

  return (
    <FlatList
      data={students}
      renderItem={({ item }) => (
        <View style={styles.studentItem}>
          <View style={styles.studentInfo}>
            <Text style={styles.studentName}>{item.name}</Text>
          </View>
          <Text style={styles.studentType}>{item.type}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.content}
    />
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <View style={styles.headersContainer}>
        <Header title="Nombre" />
        <Header title="Roles" />
      </View>
      <Content />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  mainHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
  },
  celestBackground: {
    backgroundColor: 'lightblue',
  },
  mainHeaderText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  content: {
    flexGrow: 1,
  },
  studentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  studentInfo: {
    flexDirection: 'column',
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  studentType: {
    fontSize: 14,
    color: 'gray',
    alignSelf: 'flex-end',
  },
});

export default App;
