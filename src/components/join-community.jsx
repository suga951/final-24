
import { useState } from 'react';
import Layout from '../layouts/Layout.astro';
import ThemeIcon from './DarkModeToggle.astro';

// Ejemplo de comunidades (esto normalmente vendría de una base de datos)
const comunidades = [
  { id: 1, nombre: 'Comunidad de Palermo', codigoPostal: '1425', descripcion: 'Comunidad activa en Palermo, Buenos Aires.' },
  { id: 2, nombre: 'Comunidad de Belgrano', codigoPostal: '1428', descripcion: 'Vecinos de Belgrano.' },
  { id: 3, nombre: 'Comunidad de Recoleta', codigoPostal: '1425', descripcion: 'Grupo de seguridad vecinal en Recoleta.' },
];

const filterComunidades = (codigoPostal) => {
  return comunidades.filter(comunidad => comunidad.codigoPostal === codigoPostal);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const codigoPostal = formData.get('codigoPostal');
  const filteredCommunities = filterComunidades(codigoPostal);
}
  <div class="flex flex-col min-h-screen bg-gradient-to-b from-blue-300 to-blue-700 dark:bg-gradient-to-b dark:from-blue-800 dark:to-black">
    <div class="flex flex-col items-center justify-center flex-grow p-4">
      <div class="max-w-md w-full mx-4 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">

        <header class="text-center">
          <h1 class="text-3xl font-bold text-black dark:text-gray-100 mb-4">Unirse a una Comunidad</h1>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">Ingresa tu código postal para encontrar comunidades cercanas.</p>
        </header>

       
        <form onsubmit={handleSubmit} class="mb-6">
          <div class="mb-4">
            <label for="codigoPostal" class="block text-sm text-gray-700 dark:text-gray-300 mb-2">Código Postal</label>
            <input
              type="text"
              id="codigoPostal"
              name="codigoPostal"
              placeholder="Ingresa tu código postal"
              class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          >
            Buscar Comunidades
          </button>
        </form>

  
        <section id="comunidades-list" class="mt-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Comunidades disponibles</h2>

          <ul class="space-y-4">
            {comunidades.map(comunidad => (
              <li key={comunidad.id} class="p-4 bg-blue-100 dark:bg-gray-700 rounded-lg shadow-md">
                <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">{comunidad.nombre}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Código Postal: {comunidad.codigoPostal}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">{comunidad.descripcion}</p>
                <div class="flex justify-center">
                  <a
                    href={`/chat`}
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  >
                    Unirse
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </div>
