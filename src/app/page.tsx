import Image from "next/image";

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

      <section className="relative  bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="header-bg absolute top-0 w-full h-full bg-center bg-cover">
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Actividad 3
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Despliegue de una aplicación mediante máquinas virtuales y contenedores
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: translateZ(0px)}}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div> */}
        </div>

        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              {/* Alan Amador Flores Fiscal */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-user"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Alan Amador flores Fiscal</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Ingeniero en Software
                    </p>
                  </div>
                </div>
              </div>

              {/* Lorena Hernandez */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-user"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Lorena Hernandez</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      -- Titulo --
                    </p>
                  </div>
                </div>
              </div>

              {/* Sergio Arturo Contreras */}
              {/* <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-user"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Sergio Arturo Contreras</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      -- Titulo --
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            <footer className="relative  pt-8 pb-6 mt-1">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Virtualización y Computación en la Nube
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>

        </section>
      </section>
    </>
  );
}

 
/**
 * *Creditos de la plantilla
 * Made with Notus JS by Creative Tim
 */
 
