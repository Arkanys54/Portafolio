/**
 * Servicio de contacto. Aísla la lógica de envío del componente de UI.
 *
 * Envía el mensaje mediante Web3Forms (https://web3forms.com): un servicio
 * gratuito que reenvía el contenido del formulario a tu correo, sin backend.
 * La clave se lee de la variable de entorno VITE_WEB3FORMS_KEY (se configura
 * en Vercel y en un .env.local para desarrollo). Es segura de exponer: solo
 * permite enviarte correos a ti.
 *
 * @param {{ name: string, email: string, message: string }} data
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export async function sendContactMessage(data) {
  if (!ACCESS_KEY) {
    return {
      ok: false,
      error: 'El formulario aún no está configurado. Inténtalo más tarde.',
    }
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: `Nuevo mensaje del portafolio — ${data.name}`,
        from_name: 'Portafolio',
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    })
    const result = await response.json()
    return result.success
      ? { ok: true }
      : { ok: false, error: result.message ?? 'No se pudo enviar el mensaje.' }
  } catch {
    return { ok: false, error: 'No se pudo conectar. Revisa tu conexión e inténtalo de nuevo.' }
  }
}
