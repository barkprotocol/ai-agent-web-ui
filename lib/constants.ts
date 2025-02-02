import config from "../package.json"

export const APP_VERSION = config.version
export const IS_BETA = true
export const NO_CONFIRMATION_MESSAGE = " (No confirmation required)"
export const MAX_TOKEN_MESSAGES = 10
export const RPC_URL = process.env.NEXT_PUBLIC_HELIUS_RPC_URL || "https://api.mainnet-beta.solana.com"

