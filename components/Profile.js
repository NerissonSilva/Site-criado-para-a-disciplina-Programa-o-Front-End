export default function Profile() {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 shadow-xl rounded-2xl p-8 max-w-sm mx-auto transition-transform hover:scale-105 duration-300">
      <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-inner">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Neris"
          alt="Foto de Perfil"
          className="w-full h-full object-cover bg-blue-50"
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Seu Nome</h2>
      <p className="text-gray-600 text-center text-sm leading-relaxed">
        Sou um estudante apaixonado por tecnologia e desenvolvimento web. 
        Gosto de criar interfaces bonitas e funcionais com React e Next.js. 
        Sempre em busca de novos desafios e aprendizados na área de programação front-end!
      </p>
    </div>
  );
}
