export class LatestProfileRequest {
  constructor(public nickname: string,
              public avatarUrl: string,
              public level: number,
              public elo: number,
              public kdRatio: number) {
  }
}
