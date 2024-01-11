import logo from './logo.svg';
import './App.css';


const links = [
  {
    color: "bg-red-300",
    text: "Telegram ☕️",
    link: "https://t.me/+qsSZM1xveVE0MzFl",
  },
  {
    color: "bg-sky-300",
    text: "Linkedin 🗞",
    link: "https://www.linkedin.com/in/manish-kushwaha-web-developer/",
  },
  {
    color: "bg-pink-400",
    text: "Portfolio💻",
    link: "https://manish-portfolio-basic.netlify.app/",
  },
  {
    color: "bg-blue-400",
    text: "Github💻",
    link: "https://github.com/Manish57-droid",
  },
  ];

function App() {
  return (
    <div className="w-full h-screen bg-indigo-600 flex justify-center items-center">
	<div className="max-w-2xl mx-auto flex flex-col gap-5">
		<div className="h-48 w-48 mx-auto">
			<div className=" aspect-w-1 aspect-h-1">

			</div>
		</div>
		<div className="text-center p-3">
			<h1 className="text-4xl font-bold">Manish Kushwaha</h1>
			<p className="text-lg mt-3">
      I design and code beautifully simple things, and I love what I do.
			</p>
		</div>
		<div className="flex flex-col gap-10">
			{links.map(({ text, color, link }, index) => {
				return (
					<a href={link} key={index} target="_blank">
						<div
							className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}
						>
							{text}
						</div>
					</a>
				);
			})}
		</div>
	</div>
</div>
  );
}

export default App;
