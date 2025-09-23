export default {
  // Common
  common: {
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    save: 'Guardar',
    delete: 'Eliminar',
    edit: 'Editar',
    back: 'Atrás',
    next: 'Siguiente',
    done: 'Hecho',
  },

  // Authentication
  auth: {
    welcomeBack: 'Bienvenido de Nuevo',
    signInSubtitle: 'Inicia sesión en tu cuenta para continuar',
    emailAddress: 'Dirección de Correo',
    password: 'Contraseña',
    enterEmail: 'Ingresa tu correo',
    enterPassword: 'Ingresa tu contraseña',
    forgotPassword: '¿Olvidaste tu Contraseña?',
    signIn: 'Iniciar Sesión',
    signingIn: 'Iniciando Sesión...',
    dontHaveAccount: '¿No tienes una cuenta?',
    signUp: 'Registrarse',
    createAccount: 'Crear Cuenta',
    signUpSubtitle: 'Regístrate para comenzar con tu cuenta',
    firstName: 'Nombre',
    lastName: 'Apellido',
    confirmPassword: 'Confirmar Contraseña',
    enterFirstName: 'Nombre',
    enterLastName: 'Apellido',
    createPassword: 'Crea una contraseña',
    confirmYourPassword: 'Confirma tu contraseña',
    createAccountButton: 'Crear Cuenta',
    creatingAccount: 'Creando Cuenta...',
    alreadyHaveAccount: '¿Ya tienes una cuenta?',
    signInLink: 'Iniciar Sesión',
    emailRequired: 'El correo es requerido',
    passwordRequired: 'La contraseña es requerida',
    firstNameRequired: 'El nombre es requerido',
    lastNameRequired: 'El apellido es requerido',
    confirmPasswordRequired: 'Por favor confirma tu contraseña',
    validEmailRequired: 'Por favor ingresa un correo válido',
    passwordTooShort: 'La contraseña debe tener al menos 6 caracteres',
    passwordsDoNotMatch: 'Las contraseñas no coinciden',
    loginSuccessful: 'Inicio de Sesión Exitoso',
    welcomeBackMessage: '¡Bienvenido de nuevo!',
    accountCreated: '¡Cuenta Creada!',
    welcomeMessage: '¡Bienvenido! Tu cuenta ha sido creada exitosamente.',
    loginFailed: 'Error al Iniciar Sesión',
    invalidCredentials:
      'Correo o contraseña inválidos. Por favor intenta de nuevo.',
    signupFailed: 'Error al Registrarse',
    unableToCreateAccount:
      'No se pudo crear la cuenta. Por favor intenta de nuevo.',
  },

  // Forgot Password
  forgotPassword: {
    title: '¿Olvidaste tu Contraseña?',
    subtitle:
      '¡No te preocupes! Ingresa tu correo y te enviaremos instrucciones para restablecer tu contraseña.',
    emailSent: '¡Correo Enviado!',
    emailSentSubtitle:
      'Revisa tu correo para las instrucciones de restablecimiento de contraseña.',
    sendResetInstructions: 'Enviar Instrucciones de Restablecimiento',
    sending: 'Enviando...',
    sendAnotherEmail: 'Enviar Otro Correo',
    backToSignIn: 'Volver a Iniciar Sesión',
    needHelp: '¿Necesitas Ayuda?',
    helpText:
      'Asegúrate de ingresar el correo asociado con tu cuenta. Recibirás un enlace seguro para restablecer tu contraseña.',
    didntReceiveEmail: '¿No recibiste el correo?',
    checkSpamFolder:
      'Revisa tu carpeta de spam o intenta enviar otro correo. Asegúrate de haber ingresado el correo correcto.',
    sendFailed:
      'No se pudo enviar el correo de restablecimiento. Por favor intenta de nuevo.',
  },

  // Home Screen
  home: {
    title: 'Constructor MVP Definitivo',
    subtitle:
      'Una plantilla completa de React Native para desarrollo rápido de MVP',
    welcome: '🎉 ¡Bienvenido a tu MVP!',
    welcomeMessage:
      'Esta plantilla proporciona todo lo que necesitas para construir y lanzar tu aplicación móvil rápidamente. Desde autenticación hasta permisos, te tenemos cubierto.',
    whatsIncluded: 'Qué Incluye',
    gettingStarted: 'Comenzar',
    gettingStartedText:
      'Comienza construyendo explorando las pantallas de autenticación, revisando el sistema de permisos, o sumergiéndote en la estructura de navegación. Todo está listo para personalizar según tus necesidades específicas.',
    templateInfo: 'Información de la Plantilla',
    templateInfoText:
      'Esta plantilla está diseñada para desarrolladores que quieren lanzar rápido. Incluye patrones comunes, mejores prácticas y una base sólida sobre la cual puedes construir. Personaliza los colores, agrega tus características y lanza tu MVP en tiempo récord.',
    features: {
      authentication: {
        title: 'Flujo de Autenticación',
        description:
          'Pantallas completas de inicio de sesión, registro y recuperación de contraseña con validación de formularios y manejo de errores.',
      },
      navigation: {
        title: 'Sistema de Navegación',
        description:
          'Navegación con cajón lateral y pestañas inferiores, pantalla de inicio y estructura de navegación adecuada para aplicaciones escalables.',
      },
      ui: {
        title: 'Componentes UI Modernos',
        description:
          'Sistema de diseño hermoso y consistente usando Gluestack UI y Tailwind CSS para desarrollo rápido.',
      },
      permissions: {
        title: 'Gestión de Permisos',
        description:
          'Manejo de permisos integrado para ubicación, cámara y micrófono con interfaces amigables para el usuario.',
      },
      crossPlatform: {
        title: 'Multiplataforma',
        description:
          'Funciona perfectamente en iOS y Android con optimizaciones y configuraciones específicas de plataforma.',
      },
      typescript: {
        title: 'Listo para TypeScript',
        description:
          'Base de código completamente tipada con interfaces apropiadas y seguridad de tipos para una mejor experiencia de desarrollo.',
      },
    },
  },

  // Permissions
  permissions: {
    title: 'Permisos',
    subtitle:
      'Gestiona los permisos de tu aplicación para desbloquear todas las características',
    privacyFirst: 'Privacidad Primero',
    privacyText:
      'Solo solicitamos permisos que son esenciales para la funcionalidad de la aplicación. Puedes cambiar estas configuraciones en cualquier momento en la configuración de tu dispositivo.',
    locationAccess: 'Acceso a Ubicación',
    locationDescription:
      'Permite el acceso a tu ubicación para características basadas en ubicación',
    locationGranted: 'Acceso a Ubicación Concedido',
    grantLocationAccess: 'Conceder Acceso a Ubicación',
    cameraAccess: 'Acceso a Cámara',
    cameraDescription:
      'Permite el acceso a tu cámara para características de foto y video',
    cameraGranted: 'Acceso a Cámara Concedido',
    grantCameraAccess: 'Conceder Acceso a Cámara',
    microphoneAccess: 'Acceso a Micrófono',
    microphoneDescription:
      'Permite el acceso a tu micrófono para características de grabación de audio',
    microphoneGranted: 'Acceso a Micrófono Concedido',
    grantMicrophoneAccess: 'Conceder Acceso a Micrófono',
  },

  // Splash Screen
  splash: {
    title: 'Constructor MVP Definitivo',
    tagline: 'Construye y lanza tu aplicación móvil más rápido que nunca',
    initializing: 'Inicializando...',
    settingUp: 'Configurando tu entorno de desarrollo',
    poweredBy: 'Desarrollado con React Native',
    version: 'Versión 1.0.0',
  },

  // Navigation
  navigation: {
    home: 'Inicio',
    permissions: 'Permisos',
    signOut: 'Cerrar Sesión',
  },

  // Settings
  settings: {
    title: 'Configuración',
    language: 'Idioma',
    theme: 'Tema',
    notifications: 'Notificaciones',
    privacy: 'Privacidad',
    about: 'Acerca de',
  },
};
