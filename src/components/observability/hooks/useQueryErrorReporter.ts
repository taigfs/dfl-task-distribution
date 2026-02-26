/**
 * Subscribes to the React Query cache and creates OTel error spans
 * whenever a query transitions to the `error` state.
 *
 * This app does not use @tanstack/react-query, so this hook is a no-op.
 */
export function useQueryErrorReporter(): void {
  // No-op: @tanstack/react-query is not installed in this project.
}
