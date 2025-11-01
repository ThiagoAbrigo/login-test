export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <main className="flex w-full max-w-sm flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-2 text-zinc-800 dark:text-white">
          Bienvenido de vuelta 👋
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Inicia sesión para acceder a tu cuenta.
        </p>
        <form className="space-y-4 w-full">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@correo.com"
              className="w-full p-3 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150"
            />
          </div>

          <div className="text-right">
            <a
              href="#"
              className="text-xs text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button
            type="submit"
            className="w-full mt-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-150 transform hover:scale-[1.01]"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
          ¿No tienes una cuenta?
          <a
            href="#"
            className="ml-1 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            Regístrate
          </a>
        </p>
      </main>
    </div>
  );
}
