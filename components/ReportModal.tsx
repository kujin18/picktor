type Report = {
  id: number;
  actor_name: string;
  reason: string;
};

type Props = {
  role:
    | "actor"
    | "agency"
    | "admin";

  showReports: boolean;

  reports: Report[];

  setReports: (
    reports: Report[]
  ) => void;

  onClose: () => void;
};

export default function ReportModal({
  role,
  showReports,
  reports,
  setReports,
  onClose,
}: Props) {
  if (
    role !== "admin" ||
    !showReports
  ) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8">

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto p-8 space-y-6">

        {/* 헤더 */}
        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold">
              신고 목록
            </h2>

            <p className="text-zinc-400 mt-1">
              관리자 검수 대기중인 신고 내역
            </p>

          </div>

          <button
            onClick={onClose}
            className="bg-zinc-800 px-5 py-2 rounded-2xl"
          >
            닫기
          </button>

        </div>

        {/* 리스트 */}
        <div className="space-y-4">

          {reports.length === 0 && (
            <div className="bg-zinc-800 rounded-2xl p-10 text-center text-zinc-400">
              신고된 영상이 없습니다.
            </div>
          )}

          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-zinc-800 rounded-2xl p-5 flex items-center justify-between"
            >

              <div>

                <p className="text-xl font-semibold">
                  {report.actor_name}
                </p>

                <p className="text-zinc-400 mt-1">
                  신고 사유:
                  {" "}
                  {report.reason}
                </p>

              </div>

              <button
                onClick={async () => {
                  await fetch(
                    "/api/reports/delete",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type":
                          "application/json",
                      },
                      body: JSON.stringify({
                        id: report.id,
                      }),
                    }
                  );

                  const res =
                    await fetch(
                      "/api/reports"
                    );

                  const data =
                    await res.json();

                  setReports(data);
                }}
                className="bg-red-500/20 hover:bg-red-500/30 transition text-red-400 px-5 py-2 rounded-xl font-medium"
              >
                삭제
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}