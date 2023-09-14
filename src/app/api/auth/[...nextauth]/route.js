// Importación de módulos y configuración inicial
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user"; // Importa el modelo de usuario desde "@/models/user".
import bcrypt from "bcryptjs"; // Importa la biblioteca bcrypt para el hashing y la comparación de contraseñas.

import { connectDB } from "@/libs/mongoodb"; // Importa la función connectDB para conectar a la base de datos MongoDB.

// Configuración de NextAuth
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email", // Etiqueta para el campo de correo electrónico en el formulario de inicio de sesión.
          type: "email", // Tipo de campo (correo electrónico).
          placeholder: "email", // Placeholder en el formulario.
        },
        password: {
          label: "password", // Etiqueta para el campo de contraseña en el formulario de inicio de sesión.
          type: "password", // Tipo de campo (contraseña).
        },
      },
      async authorize(credentials, req) {
        // Conexión a la base de datos MongoDB.
        await connectDB();

        // Búsqueda del usuario por su correo electrónico en la base de datos.
        const userFound = await User.findOne({ email: credentials?.email }).select("+password");

        // Si no se encuentra un usuario, lanza un error de "Credenciales Inválidas".
        if (!userFound) throw new Error("Credenciales Invalidas");

        // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos.
        const passwordMatch = await bcrypt.compare(credentials.password, userFound.password);

        // Si las contraseñas no coinciden, lanza un error de "Error contraseña".
        if (!passwordMatch) throw new Error("Error contraseña");

        // Retorna el usuario encontrado si las credenciales son válidas.
        return userFound;
      },
    }),
  ],
  callbacks: {
    // Callback para agregar información del usuario al token JWT.
    jwt({ account, user, token, profile, session, trigger }) {
      if (user) token.user = user;
      return token;
    },
    // Callback para agregar información del usuario a la sesión.
    session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: '/login', // Página personalizada de inicio de sesión en '/login'.
  },
});

// Exporta el manejador de autenticación como GET y POST.
export { handler as GET, handler as POST };
