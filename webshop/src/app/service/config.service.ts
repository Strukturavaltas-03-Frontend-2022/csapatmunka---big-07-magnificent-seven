import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  categoryList: Category[] = [
    {
      id: 1,
      name: 'Documentary',
      description:
        'A documentary film or documentary is a non-fictional motion-picture intended to "document reality, primarily for the purposes of instruction, education or maintaining a historical record"',
    },
    {
      id: 2,
      name: 'Comedy',
      description:
        'A comedy film is a category of film which emphasizes humor.',
    },
    {
      id: 3,
      name: 'Adventure',
      description:
        'Adventure film is a type of film that usually presents danger, or gives the viewer a sense of excitement.',
    },
  ];
}
