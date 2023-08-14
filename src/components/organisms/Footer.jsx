import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="relative bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-2 dark:bg-gray-900 dark:border-gray-600 mb-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between space-x-4 mx-auto p-4">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" ULearn"}. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licença
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
