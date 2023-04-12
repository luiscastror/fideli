import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: 'profile',
      badge: {
        text: '30',
        status: 'primary',
      },
      expanded: true,
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
      badge: {
        dotMode: true,
        status: 'warning',
      },
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
      badge: {
        text: '30',
        status: 'primary',
      },
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
    {
      title: 'Profile',
      badge: {
        text: 'new',
        status: 'success',
      },
      expanded: true,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
          badge: {
            text: '30',
            status: 'primary',
          },
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Shopping Bag',
      expanded: true,
      children: [
        {
          title: 'First Product',
        },
        {
          title: 'Second Product',
          badge: {
            text: '30',
            status: 'danger',
          },
        },
        {
          title: 'Third Product',
        },
      ],
    },
    {
      title: 'Orders',
      expanded: true,
      children: [
        {
          title: 'First Order',
          expanded: true,
          children: [
            {
              title: 'Second Order',
            },
            {
              title: 'Third Order',
            },
          ],
        },
        {
          title: 'Second Order',
        },
        {
          title: 'Third Order',
        },
      ],
    },
  ];
}
