<template>
  <div>
    <!-- Password Protection Screen -->
    <div v-if="!isAuthenticated" class="auth-overlay">
      <div class="auth-container">
        <div class="auth-card">
          <h2>🔒 Access Required</h2>
          <p>This website is restricted. Please enter the access code.</p>
          
          <form @submit.prevent="checkPassword" class="auth-form">
            <input 
              v-model="enteredPassword" 
              type="password" 
              placeholder="Enter access code"
              class="password-input"
              :class="{ 'error-input': hasError }"
            />
            <button type="submit" class="auth-button">
              {{ isLoading ? 'Checking...' : 'Access Website' }}
            </button>
          </form>
          
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
      </div>
    </div>

    <!-- Your existing Nuxt app -->
    <div v-else>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      
      <!-- Optional logout button -->
      <button @click="logout" class="logout-btn">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive variables
const isAuthenticated = ref(false)
const enteredPassword = ref('')
const errorMessage = ref('')
const hasError = ref(false)
const isLoading = ref(false)

// Change this to your desired password
const correctPassword = '29UE65Ilv60lDDAMFqRP27c7PobBQR'

// Check stored authentication on mount
onMounted(() => {
  checkStoredAuth()
})

const checkStoredAuth = () => {
  if (process.client) {
    const storedAuth = localStorage.getItem('siteAuthenticated')
    const authTime = localStorage.getItem('authTime')
    
    if (storedAuth === 'true' && authTime) {
      const now = new Date().getTime()
      const authTimestamp = parseInt(authTime)
      const hoursPassed = (now - authTimestamp) / (1000 * 60 * 60)
      
      if (hoursPassed < 24) { // Authentication expires after 24 hours
        isAuthenticated.value = true
      } else {
        clearAuth()
      }
    }
  }
}

const checkPassword = async () => {
  isLoading.value = true
  hasError.value = false
  errorMessage.value = ''
  
  // Simulate a small delay for better UX
  await new Promise(resolve => setTimeout(resolve, 500))
  
  if (enteredPassword.value === correctPassword) {
    isAuthenticated.value = true
    // Store authentication
    if (process.client) {
      localStorage.setItem('siteAuthenticated', 'true')
      localStorage.setItem('authTime', new Date().getTime().toString())
    }
    enteredPassword.value = ''
  } else {
    hasError.value = true
    errorMessage.value = 'Invalid access code. Please try again.'
    enteredPassword.value = ''
    
    // Clear error after 3 seconds
    setTimeout(() => {
      errorMessage.value = ''
      hasError.value = false
    }, 3000)
  }
  
  isLoading.value = false
}

const logout = () => {
  isAuthenticated.value = false
  clearAuth()
}

const clearAuth = () => {
  if (process.client) {
    localStorage.removeItem('siteAuthenticated')
    localStorage.removeItem('authTime')
  }
}
</script>

<style>
/* Auth overlay styles */
.auth-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.auth-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

.auth-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  text-align: center;
}

.auth-card h2 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 24px;
}

.auth-card p {
  margin: 0 0 30px 0;
  color: #666;
  line-height: 1.5;
}

.auth-form {
  margin-bottom: 20px;
}

.password-input {
  width: 100%;
  padding: 15px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.password-input:focus {
  outline: none;
  border-color: #667eea;
}

.password-input.error-input {
  border-color: #e74c3c;
  animation: shake 0.5s ease-in-out;
}

.auth-button {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.auth-button:hover {
  transform: translateY(-2px);
}

.auth-button:active {
  transform: translateY(0);
}

.error-message {
  color: #e74c3c;
  margin: 0;
  font-size: 14px;
}

.logout-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  z-index: 1000;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

/* Responsive design */
@media (max-width: 480px) {
  .auth-container {
    padding: 10px;
  }
  
  .auth-card {
    padding: 30px 20px;
  }
}
</style>