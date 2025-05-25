import { Component, OnInit } from '@angular/core';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  isSubmitted = false;
  isLoading = false;
  errorMessage = '';

  constructor() { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.isLoading = true;
    this.errorMessage = '';

    // Create a hidden form and submit it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/capijoproducao@gmail.com';

    // Add form fields
    Object.entries(this.formData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    // Add success and error redirect URLs
    const successInput = document.createElement('input');
    successInput.type = 'hidden';
    successInput.name = '_next';
    successInput.value = window.location.href + '?success=true';
    form.appendChild(successInput);

    document.body.appendChild(form);
    form.submit();

    // Reset form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  async copyText(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast or notification here to show success
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
}
