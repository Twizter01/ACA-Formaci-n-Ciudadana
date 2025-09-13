import React, { useState } from 'react';
import { BookOpen, Users, Shield, Vote, GraduationCap, User, Calendar, FileText, School } from 'lucide-react';

function App() {
  const [activeBox, setActiveBox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Academic Header */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-gray-700">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Ficha - 53374</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm">Formación Ciudadana</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <User className="w-4 h-4" />
                <span className="text-sm">Pr. Iván Andrés Quintero Mora</span>
              </div>
            </div>
            
            <div className="space-y-1 md:text-right">
              <div className="flex items-center justify-end space-x-2 text-gray-700">
                <span className="text-sm font-medium">Estudiante: Gabriel Rodríguez</span>
                <User className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-end space-x-2 text-gray-700">
                <span className="text-sm">Departamento de Ingeniería</span>
                <School className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-end space-x-2 text-gray-700">
                <span className="text-sm">09/10/2025</span>
                <Calendar className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Concept Map */}
        <div className="bg-white rounded-lg shadow-sm border p-12">
          <div className="relative w-full h-[800px]">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" 
                        refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#6b7280" />
                </marker>
              </defs>
              
              {/* Main concept to top concepts */}
              <line x1="50%" y1="120" x2="20%" y2="200" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <line x1="50%" y1="120" x2="80%" y2="200" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Main concept to bottom concepts */}
              <line x1="50%" y1="160" x2="20%" y2="400" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <line x1="50%" y1="160" x2="50%" y2="400" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <line x1="50%" y1="160" x2="80%" y2="400" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </svg>

            {/* Main Central Concept */}
            <div 
              className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white border-2 border-gray-400 rounded-2xl px-8 py-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              style={{ width: '280px' }}
              onClick={() => setActiveBox(activeBox === 'central' ? null : 'central')}
            >
              <div className="text-center">
                <h3 className="font-bold text-gray-800 text-lg mb-1">MAPA CONCEPTUAL</h3>
                <p className="text-gray-600 text-sm">Ciudadanía Democrática y Construcción de Paz</p>
              </div>
            </div>

            {/* Top Row Concepts */}
            <div 
              className="absolute top-44 left-16 bg-white border-2 border-green-500 rounded-2xl px-6 py-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              style={{ width: '240px' }}
              onClick={() => setActiveBox(activeBox === 'dimensions' ? null : 'dimensions')}
            >
              <div className="text-left">
                <h4 className="font-bold text-gray-800 text-base mb-2 text-green-700">DIMENSIONES DE LA CIUDADANÍA</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Análisis multidimensional que abarca aspectos jurídicos, políticos, sociales y culturales del ejercicio ciudadano en el contexto democrático colombiano.
                </p>
              </div>
            </div>

            <div 
              className="absolute top-44 right-16 bg-white border-2 border-red-500 rounded-2xl px-6 py-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              style={{ width: '240px' }}
              onClick={() => setActiveBox(activeBox === 'rights' ? null : 'rights')}
            >
              <div className="text-left">
                <h4 className="font-bold text-gray-800 text-base mb-2 text-red-700">DERECHOS FUNDAMENTALES</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Conjunto de derechos inherentes a la persona humana, reconocidos constitucionalmente y protegidos por el Estado colombiano.
                </p>
              </div>
            </div>

            {/* Bottom Row Concepts */}
            <div 
              className="absolute top-96 left-16 bg-white border-2 border-purple-500 rounded-2xl px-6 py-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              style={{ width: '240px' }}
              onClick={() => setActiveBox(activeBox === 'active' ? null : 'active')}
            >
              <div className="text-left">
                <h4 className="font-bold text-gray-800 text-base mb-2 text-purple-700">CIUDADANÍA ACTIVA</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Ejercicio proactivo de la ciudadanía que trasciende el voto e incluye participación continua en la vida pública y comunitaria.
                </p>
              </div>
            </div>

            <div 
              className="absolute top-96 left-1/2 transform -translate-x-1/2 bg-white border-2 border-blue-500 rounded-2xl px-6 py-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              style={{ width: '240px' }}
              onClick={() => setActiveBox(activeBox === 'creative' ? null : 'creative')}
            >
              <div className="text-left">
                <h4 className="font-bold text-gray-800 text-base mb-2 text-blue-700">CONSTRUCCIÓN DE PAZ</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Proceso integral que busca transformar conflictos y construir una paz estable y duradera en Colombia.
                </p>
              </div>
            </div>

            <div 
              className="absolute top-96 right-16 bg-white border-2 border-yellow-500 rounded-2xl px-6 py-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              style={{ width: '240px' }}
              onClick={() => setActiveBox(activeBox === 'education' ? null : 'education')}
            >
              <div className="text-left">
                <h4 className="font-bold text-gray-800 text-base mb-2 text-yellow-700">EDUCACIÓN CIUDADANA</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Proceso formativo integral que desarrolla competencias ciudadanas y valores democráticos para la convivencia pacífica.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Concepts Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mt-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">CONCEPTOS PRINCIPALES DEL CURSO</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Concepto 1 */}
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-lg bg-green-500 flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-3">Concepto 1: Dimensiones de la Ciudadanía</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    Análisis multidimensional de la ciudadanía que abarca aspectos jurídicos, políticos, sociales y culturales, 
                    considerando el contexto específico de Colombia y sus desafíos democráticos.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Dimensión Jurídica:</strong> Marco legal que define derechos y deberes ciudadanos</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Dimensión Política:</strong> Participación en procesos democráticos y toma de decisiones</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Dimensión Social:</strong> Integración comunitaria y cohesión social</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Dimensión Cultural:</strong> Identidad, valores y diversidad en el ejercicio ciudadano</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Concepto 2 */}
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-lg bg-red-500 flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-3">Concepto 2: Derechos Fundamentales</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    Conjunto de derechos inherentes a la persona humana, reconocidos constitucionalmente y protegidos por el Estado, 
                    fundamentales para la dignidad humana y el desarrollo integral.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Derechos Civiles:</strong> Libertad, igualdad, debido proceso, intimidad</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Derechos Políticos:</strong> Sufragio, participación, asociación política</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Derechos Sociales:</strong> Educación, salud, trabajo, vivienda digna</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Derechos Colectivos:</strong> Ambiente sano, patrimonio cultural, paz</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Concepto 3 */}
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-lg bg-purple-500 flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-3">Concepto 3: Ciudadanía Activa</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    Ejercicio proactivo de la ciudadanía que trasciende el voto e incluye participación continua en la vida pública, 
                    promoviendo el control social y la construcción democrática.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Participación Comunitaria:</strong> Involucramiento en organizaciones locales</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Control Social:</strong> Vigilancia y seguimiento a la gestión pública</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Iniciativas Ciudadanas:</strong> Propuestas y proyectos de desarrollo social</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Cultura Cívica:</strong> Valores democráticos y responsabilidad social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Concepto 4 */}
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-lg bg-blue-500 flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-3">Concepto 4: Construcción de Paz</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    Proceso integral que busca transformar conflictos y construir una paz estable y duradera, 
                    abordando las causas estructurales de la violencia en Colombia.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Paz Negativa:</strong> Ausencia de violencia directa y conflicto armado</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Paz Positiva:</strong> Justicia social, equidad y bienestar colectivo</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Reconciliación:</strong> Sanación del tejido social y perdón</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm"><strong>Transformación de Conflictos:</strong> Cambio constructivo de dinámicas violentas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Concepto 5 */}
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-500 lg:col-span-2">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-lg bg-yellow-500 flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-3">Concepto 5: Educación para la Ciudadanía</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    Proceso formativo integral que desarrolla competencias ciudadanas y valores democráticos, 
                    promoviendo la formación de ciudadanos críticos, participativos y comprometidos con la paz.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm"><strong>Formación Democrática:</strong> Principios y valores de la democracia</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm"><strong>Competencias Ciudadanas:</strong> Habilidades para la convivencia pacífica</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm"><strong>Pensamiento Crítico:</strong> Análisis reflexivo de la realidad social</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm"><strong>Cultura de Paz:</strong> Promoción de la resolución pacífica de conflictos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Footer */}
        <div className="text-center mt-8 bg-white rounded-lg p-6 shadow-sm border">
          <p className="text-gray-600 text-sm mb-2">
            <strong>Proyecto Académico:</strong> Mapa conceptual sobre Ciudadanía Democrática y Construcción de Paz
          </p>
          <p className="text-gray-500 text-xs">
            Desarrollado como parte del programa de Formación Ciudadana - Departamento de Ingeniería
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;