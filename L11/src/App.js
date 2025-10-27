import './App.css';
import Book from './Book';

function App() {
  // ფუნქცია, რომელიც გადაეწოდება კომპონენტს პარამეტრად
  const handleBookInfo = (title, characters) => {
    console.log('===== ღილაკზე დაჭერის შედეგი =====');
    console.log('წიგნის სათაური:', title);
    console.log('პერსონაჟები:', characters);
    console.log('===================================');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ჩემი საყვარელი წიგნები</h1>
      </header>
      
      <main className="App-main">
        {/* პირველი წიგნი */}
        <Book 
          image="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80"
          title="ბრძოლა ბნელ ძალებთან"
          description="ეს არის დაუვიწყარი თავგადასავალი ჯადოსნური სამყაროს შესახებ, სადაც მთავარი გმირი იბრძვის ბნელ ძალებთან და ეძებს თავის ნამდვილ მოწოდებას."
          characters={[
            'ალექსანდრე - მთავარი გმირი',
            'ნინო - ჯადოქარი',
            'გიორგი - მეომარი',
            'თამარი - მკურნალი'
          ]}
          onButtonClick={handleBookInfo}
        />

        {/* მეორე წიგნი */}
        <Book 
          image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80"
          title="დაკარგული სამეფო"
          description="მოთხრობა უძველესი სამეფოს შესახებ, რომელიც დაიკარგა დროში. გმირები ცდილობენ აღმოაჩინონ სამეფოს საიდუმლოებები და დაიბრუნონ დიდება."
          characters={[
            'დავით - მეფე',
            'ანა - პრინცესა',
            'ლევანი - რაინდი',
            'მარიამ - მრჩეველი',
            'ვახტანგი - გენერალი'
          ]}
          onButtonClick={handleBookInfo}
        />

        {/* მესამე წიგნი */}
        <Book 
          image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80"
          title="მთების საიდუმლო"
          description="ამაღელვებელი სათავგადასავლო მოგზაურობა მაღალ მთებში, სადაც ბუნების სილამაზე შერწყმულია მისტიკურ ლეგენდებთან."
          characters={[
            'ირაკლი - მთამსვლელი',
            'სოფო - გიდი',
            'ნიკა - ფოტოგრაფი'
          ]}
          onButtonClick={handleBookInfo}
        />
      </main>
    </div>
  );
}

export default App;
