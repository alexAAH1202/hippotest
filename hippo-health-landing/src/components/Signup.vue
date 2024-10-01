<template>
  <form @submit.prevent="handleSubmit" class="signup-form">
    <h2>Sign Up for Launch Updates</h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <button type="submit">Keep Me Informed</button>
    <p v-if="message" :class="{ 'success': isSuccess, 'error': !isSuccess }">{{ message }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const isSuccess = ref(false);

const handleSubmit = () => {
  // Reset message
  message.value = '';
  isSuccess.value = false;

  // Basic validation
  if (!name.value.trim() || !email.value.trim()) {
    message.value = 'Please fill in all fields';
    return;
  }

  // Here you would typically send the data to your backend
  console.log('Submitting:', { name: name.value, email: email.value });

  // Simulate successful submission
  message.value = 'Thank you for signing up! We\'ll keep you updated on our launch.';
  isSuccess.value = true;

  // Reset form after successful submission
  name.value = '';
  email.value = '';
};
</script>

<style scoped>
.signup-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

.success {
  color: green;
  margin-top: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
