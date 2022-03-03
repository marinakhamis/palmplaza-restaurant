import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  meals: any[] = [
    {
      image: "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
      thumbImage: "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
      title: 'Chick-Fil-A Sandwich',
      alt: 'Chick-Fil-A Sandwich'
    },
    {
      image: "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
      thumbImage: "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
      title: 'Chicken Couscous',
      alt: 'Chicken Couscous',
    },
    {
      image: "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
      thumbImage: "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
      title: "Chicken Fajita Mac and Cheese",
      alt: "Chicken Fajita Mac and Cheese",
    },
    {
      image: "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg",
      thumbImage: "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg",
      title: "Chicken Ham and Leek Pie",
      alt: "Chicken Ham and Leek Pie",
    },
    {
      image: "https://www.themealdb.com/images/media/meals/1529444113.jpg",
      thumbImage: "https://www.themealdb.com/images/media/meals/1529444113.jpg",
      title: "General Tso's Chicken",
      alt: "General Tso's Chicken",
    },

    {
      image: 	"https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
      thumbImage: 	"https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
      title: "Katsu Chicken curry",
      alt:	"Katsu Chicken curry",
    },
    {
      image: 		"https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg",
      thumbImage: 		"https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg",
      title: 	"Honey Balsamic Chicken",
      alt:		"Honey Balsamic Chicken",
    },
    {
      image: 		"https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
      thumbImage: 		"https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
      title: 	"Corba",
      alt:		"Corba",
    },
    {
      image: "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg"	,
      thumbImage: 	"https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg"	,
      title:"Nasi lemak" 	,
      alt:"Nasi lemak"	,
    },
    {
      image: 	"https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
      thumbImage: "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg"		,
      title: "Apam balik"	,
      alt:"Apam balik"	,
    },
    {
      image: "https://www.themealdb.com/images/media/meals/x372ug1598733932.jpg"	,
      thumbImage: "https://www.themealdb.com/images/media/meals/x372ug1598733932.jpg"		,
      title: "Mulukhiyah"	,
      alt:"Mulukhiyah"	,
    },
    {
      image: "https://www.themealdb.com/images/media/meals/1525874812.jpg"	,
      thumbImage: 	"https://www.themealdb.com/images/media/meals/1525874812.jpg"	,
      title: 	"Ma Po Tofu",
      alt:"Ma Po Tofu"	,
    },
    {
      image: "https://www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg"	,
      thumbImage: 	"https://www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg"	,
      title: "Rock Cakes"	,
      alt:"Rock Cakes"	,
    },
    {
      image: 	"https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg",
      thumbImage: "https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg"		,
      title: "Coq au vin"	,
      alt:	"Coq au vin",
    },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
