interface StateStatus {
  status: 'idle' | 'loading' | 'failed' | 'success';
}

export interface AuthState extends StateStatus {
  accessToken: string;
}
