CREATE DATABASE IF NOT EXISTS escuela;

USE escuela;

--Roles
CREATE TABLE Roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rol VARCHAR(20) NOT NULL
);

INSERT INTO Roles (rol) VALUES 
('estudiante'),
('maestro');

--Estudiantes
CREATE TABLE Estudiantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rol_id INT,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    carnet VARCHAR(6) NOT NULL,
    grado VARCHAR(20),
    FOREIGN KEY (rol_id) REFERENCES Roles(id)
);
-- Insertar un estudiante
INSERT INTO Estudiantes (rol_id, nombres, apellidos, carnet, grado) VALUES 
(1, 'Kurt', 'Cobain', 'NI001', 'Noveno'), (1, 'Eric', 'Ghoste', 'GH005', 'Quinto'), (1, 'Kanye', 'West', 'YE009', 'Septimo');

-- Maestros
CREATE TABLE Maestros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rol_id INT,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    codigo VARCHAR(5) NOT NULL,
    asignaturas_imp VARCHAR(255),
    grados_asignados VARCHAR(255),
    FOREIGN KEY (rol_id) REFERENCES Roles(id)
);
INSERT INTO Maestros (rol_id, nombre, apellidos, codigo, asignaturas_imp, grados_asignados) VALUES 
(2, 'Jacques', 'Webster II', 'T001S', 'Matemáticas', 'Noveno, Octavo'),
(2, 'Kendrick ', 'Duckworth ', 'K004L', 'Sociales', 'Septimo, Sexto'),
(2, 'Marshall', 'Mathers III', 'E006M', 'Lenguaje', 'Quinto, Cuarto');
