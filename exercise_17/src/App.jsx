
import { useForm } from './useForm';

function App() {
  const { values, handleChange } = useForm({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', values);
  };

  return (
    <div>
      <h1>Custom Hook Form</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={values.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={values.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={values.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="location" value={values.location} onChange={handleChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={values.message} onChange={handleChange} placeholder="Enter your message here..." />
        </label>
        <br />
        <br />

        <button type="submit" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default App
