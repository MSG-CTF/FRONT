// 서버 시간은 전부 ISO-8601 UTC(끝에 Z)로 온다. 표시용 KST 변환은 프론트 책임.
export function toKst(isoUtc, options = {}) {
  if (!isoUtc) return "";
  return new Date(isoUtc).toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
    ...options,
  });
}
