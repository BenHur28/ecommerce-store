import getBillboards from "@/actions/get-billboards";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
	const billboard = await getBillboards("948d7ad8-1f47-43b0-af2a-a018e5ced298");

	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard} />
			</div>
		</Container>
	);
};

export default HomePage;
