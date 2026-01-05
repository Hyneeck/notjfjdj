import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
  onSubmit?: (formData: { name: string; email: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [state, handleSubmit] = useForm("mgvllnll");
  
  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-primary font-medium">Děkujeme za vaši zprávu!</p>
        <p className="text-muted-foreground mt-2">Odpovíme vám co nejdříve.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
        Napište nám
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-foreground font-medium mb-2">
            Jméno *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-foreground"
            placeholder="Vaše jméno"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="email" className="block text-foreground font-medium mb-2">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-foreground"
            placeholder="vas@email.cz"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="block text-foreground font-medium mb-2">
            Zpráva *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-foreground resize-vertical"
            placeholder="Vaše zpráva..."
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Odesílám..." : "Odeslat zprávu"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;