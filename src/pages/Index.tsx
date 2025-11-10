import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm shadow-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary font-serif">База Отдыха</h1>
            <div className="hidden md:flex gap-6">
              {['Развлечения', 'Проживание', 'Питание', 'Территория', 'Детский досуг', 'Бронирование'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-20 pb-16 px-4 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-serif leading-tight">
                Отдых на природе для всей семьи
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Погрузитесь в атмосферу спокойствия и гармонии с природой. Уютные домики, 
                чистый воздух и незабываемые впечатления ждут вас.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('бронирование')}
                className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
              >
                Забронировать сейчас
              </Button>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/7eec902c-2453-4e4b-9809-69ad0dba1a17/files/b1d0995e-830e-4b39-8296-120906f48257.jpg"
                alt="База отдыха"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="развлечения" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-4 font-serif">Развлечения</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Активный отдых и приключения на свежем воздухе
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Waves', title: 'Водные развлечения', desc: 'Каякинг, SUP-бординг, купание в озере' },
              { icon: 'Mountain', title: 'Пешие походы', desc: 'Маршруты разной сложности по лесным тропам' },
              { icon: 'Bike', title: 'Велопрогулки', desc: 'Прокат велосипедов и обустроенные дорожки' },
              { icon: 'Fish', title: 'Рыбалка', desc: 'Тихие уголки для любителей рыбной ловли' },
              { icon: 'Flame', title: 'Костры и пикники', desc: 'Оборудованные места для отдыха на природе' },
              { icon: 'TreePine', title: 'Экскурсии', desc: 'Познавательные прогулки с гидом по окрестностям' }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-serif text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="проживание" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/7eec902c-2453-4e4b-9809-69ad0dba1a17/files/efb15d94-7120-48bf-aa6e-ea44bbdc675f.jpg"
                alt="Проживание"
                className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6 font-serif">Комфортное проживание</h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Наши уютные домики выполнены из натуральных материалов и оснащены всем необходимым 
                для комфортного отдыха. Каждый домик имеет собственную террасу с видом на лес.
              </p>
              <ul className="space-y-3">
                {[
                  'Домики на 2-6 человек',
                  'Собственная ванная комната',
                  'Кухонная зона',
                  'Постельное белье и полотенца',
                  'Wi-Fi и электричество',
                  'Терраса с мебелью'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="питание" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-4 font-serif">Питание</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Здоровая еда из местных продуктов
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'Coffee', title: 'Завтраки', desc: 'Свежая выпечка, молочные продукты, фрукты' },
              { icon: 'UtensilsCrossed', title: 'Обеды и ужины', desc: 'Домашняя кухня, вегетарианские опции' },
              { icon: 'Pizza', title: 'Барбекю', desc: 'Мангальные зоны и мастер-классы по приготовлению' }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-serif">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="территория" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-4 font-serif">Территория</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            5 гектаров ухоженной природной территории
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'Trees', title: 'Хвойный лес', desc: 'Чистый воздух и тенистые аллеи' },
              { icon: 'Sparkles', title: 'Озеро', desc: 'Собственный пляж и причал' },
              { icon: 'Home', title: 'Беседки', desc: 'Места для отдыха и мероприятий' },
              { icon: 'Leaf', title: 'Сад', desc: 'Фруктовые деревья и цветники' }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-accent/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 font-serif">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="детский-досуг" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-primary mb-6 font-serif">Детский досуг</h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Мы создали безопасное пространство, где дети могут играть, учиться и исследовать природу 
                под присмотром опытных аниматоров.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Smile', title: 'Детская площадка', desc: 'Качели, горки, песочница' },
                  { icon: 'Palette', title: 'Творческие мастер-классы', desc: 'Рисование, лепка, поделки' },
                  { icon: 'Trophy', title: 'Спортивные игры', desc: 'Волейбол, бадминтон, футбол' },
                  { icon: 'Star', title: 'Вечерние программы', desc: 'Дискотеки, квесты, кинопоказы' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-card hover:shadow-md transition-shadow">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold font-serif mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.poehali.dev/projects/7eec902c-2453-4e4b-9809-69ad0dba1a17/files/9f299128-bee8-4071-9544-ce8bfeabff1d.jpg"
                alt="Детский досуг"
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="бронирование" className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-4 font-serif">Забронировать отдых</h2>
          <p className="text-center text-muted-foreground mb-8">
            Заполните форму, и мы свяжемся с вами в ближайшее время
          </p>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input id="name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkin">Дата заезда *</Label>
                    <Input id="checkin" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkout">Дата выезда *</Label>
                    <Input id="checkout" type="date" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Количество гостей *</Label>
                  <Input id="guests" type="number" min="1" placeholder="2" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительные пожелания</Label>
                  <Textarea id="message" placeholder="Расскажите о ваших предпочтениях..." rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-serif">База Отдыха</h3>
              <p className="opacity-90">Ваш идеальный отдых на природе</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-serif">Контакты</h4>
              <div className="space-y-2 opacity-90">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@bazaotdyha.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Московская обл., Лесное
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-serif">Режим работы</h4>
              <p className="opacity-90">Круглый год<br />Без выходных<br />Заезд с 14:00<br />Выезд до 12:00</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-75">
            <p>&copy; 2024 База Отдыха. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
