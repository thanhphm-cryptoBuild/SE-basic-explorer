import TableLatestBlockSupport from "../../table/tableSuport/tableLatestBlockSupport";

const LatestBlockSuport = () => {
  return (
    <>
      <div class="col-span-12 xl:col-span-12">
        <div>
          <div class="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
            <div class="text-base font-medium">
            Latest 10 Blocks
            </div>
          </div>
          <div class="box box--stacked mt-2 p-5">
            <TableLatestBlockSupport />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlockSuport;
