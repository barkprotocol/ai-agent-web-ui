import type {
  Action,
  Message,
  Wallet as _PrismaWallet,
  Conversation as _PrismaConversation,
  User as _PrismaUser,
} from "@prisma/client"
import type { Prisma } from "@prisma/client"

// Wallet type
export type Wallet = Pick<
  _PrismaWallet,
  "id" | "name" | "ownerId" | "publicKey" | "encryptedPrivateKey" | "createdAt" | "updatedAt"
>

// Conversation types
export type ConversationMeta = Pick<_PrismaConversation, "id" | "userId" | "title">

export type Conversation = _PrismaConversation & {
  messages: Message[]
}

// User types
export type PrismaUser = _PrismaUser & {
  wallets: Wallet[]
}

export type DbUser = Pick<PrismaUser, "id" | "privyId" | "createdAt" | "updatedAt" | "earlyAccess" | "wallets"> & {
  hasEAP: boolean
  telegramId?: string
}

// Action types
export type NewAction = Omit<Action, "id">

export type ActionWithUser = Prisma.ActionGetPayload<{
  include: {
    user: {
      include: {
        wallets: true
      }
    }
  }
}>

export type ActionFull = Prisma.ActionGetPayload<{
  select: { [K in keyof Required<Prisma.ActionSelect>]: true }
}>

// Message type
export type { Message }

// Utility type for Prisma select
export type PrismaSelect<T> = {
  [K in keyof T]?: boolean
}

