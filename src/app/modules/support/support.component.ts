import { Component, Input, OnInit } from '@angular/core';
import { BlogPostCard } from '../cardList';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
  }
  posts: BlogPostCard[] = [
    {
      mainImageUrl: './assets/html.png',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: './assets/css.png',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: './assets/js.png',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: './assets/an.png',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: './assets/mon.png',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: './assets/dj.png',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/2TQwrtZnl08/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/cGwfkwHmt98/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
  ];

}
