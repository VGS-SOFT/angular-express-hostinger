import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  message = 'Loading...';
  isLoaded = false;
  isError = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ message: string }>('/api/message').subscribe({
      next: (data) => {
        this.message = data.message;
        this.isLoaded = true;
      },
      error: () => {
        this.message = 'Error: Could not reach the backend.';
        this.isError = true;
      }
    });
  }
}
