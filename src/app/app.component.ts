import { Component, Pipe, PipeTransform, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isCombobox, Popup } from '@tailwind-ng/core';
import { provideIcon, provideUI, TwAvatar, TwButton, TwComboboxModule, TwDropdown, TwIcon, TwInputText } from 'tailwind-ng';

interface User {
  image?: string;
  name: string;
  status?: 'active' | 'inactive';
}

@Pipe({ name: 'string', pure: false })
export class StringPipe implements PipeTransform {

  transform(value: Set<string>): string {
    return `[ ${[...value].join(', ')} ] (${value.size})`;
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TwButton, TwComboboxModule, TwDropdown, TwIcon, StringPipe, TwInputText, TwAvatar],
  providers: [
    provideUI({
      elements: {
        dropdown: {
          radius: 'rounded-none'
        },
        icon: {
          map: {
            check: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> </svg>`
          }
        }
      }
    }),
    // provideIcon({
    //   map: {
    //   }
    // })
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  selectionMode = signal<'single' | 'multi'>('multi');
  selection = new Set(['James Williams', 'Charles Thomas', 'Leonard Krasner', 'Patricia Brown', 'Barbara Garcia']);
  get _users(): User[] {
    return [
      {
        image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Elizabeth Martinez',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'David Rodriguez',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Susan Wilson',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Courtney Henry',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Tom Cook',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Charles Thomas',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Mary Taylor',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Christopher Moore',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Lindsay Walton',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'James Williams',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Linda Jones',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Barbara Garcia',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Whitney Francis',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Leonard Krasner',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Floyd Miles',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Emily Selman',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Kristin Watson',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Emma Dorsey',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Jane Smith',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Patricia Brown',
        status: 'active'
      },
      {
        image: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Ronald Rodriguez',
        status: 'inactive'
      },
      {
        image: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Anthony Lewis',
        status: 'active'
      },
    ]
  };

  users = this._users;
  filter(value: string, id = 1): void {
    this.users = this._users.filter((x) => this.checkMatch(x.name, value));
  }

  private checkMatch = (x: string, y: string) => {
    x = x.toLocaleLowerCase();
    y = y.toLocaleLowerCase();
    return x.includes(y) || x.startsWith(y)
  };

  reset(id = 1, popup?: Popup): void {
    this.users = this._users;

    if (isCombobox(popup)) {
      popup.reset();
    }
  }
}
