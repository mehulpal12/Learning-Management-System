export {}

// Create a type for the Roles
export type Roles = 'ADMIN' | 'STUDENT' | 'INSTRUCTOR'

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}