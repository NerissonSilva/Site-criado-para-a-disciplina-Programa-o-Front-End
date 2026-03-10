import Profile from "../../components/Profile";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 font-sans">
      <main className="w-full max-w-2xl flex flex-col items-center justify-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 tracking-tight">
          Site criado para a disciplina Programação Front-End
        </h1>
        
        <Profile />
      </main>
    </div>
  );
}
