export default {
  name: 'services-mixins',
  methods: {
    getSidebar() {
      return {
        sidebar: [
          {
            title: "Имплантация",
            href: "/services/implantacija",
            img: '/img/services/implanty.png'
          },
          {
            title: "Детская стоматология",
            href: "/services/detskaya-stomatologiya",
            img: '/img/services/children_dent.png'
          },
          {
            title: "Лечение зубов",
            href: "/services/lechenie-zubov",
            img: '/img/services/treatment.png'
          },
          {
            title: "Реставрация зубов",
            href: "/services/restavracija-zubov",
            img: '/img/services/restavracija.png'
          },
          {
            title: "Виниры и люминиры",
            href: "/services/viniry-i-luminiry",
            img: '/img/services/viniry.png'
          },
          {
            title: "Отбеливание и гигиена",
            href: "/services/otbelivanie-i-gigiena",
            img: '/img/services/otbelivanie.png'
          },
          {
            title: "Исправление прикуса",
            href: "/services/ispravlenie-prikusa",
            img: '/img/services/overbite_fix.png'
          },
          {
            title: "Осмотр и консультация",
            href: "/services/osmotr-i-konsultatsiya",
            img: '/img/services/consulting.png'
          }
        ]
      };
    }
  }
}