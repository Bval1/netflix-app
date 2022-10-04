import "./listList.css"
import { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCalls";


export default function ListList() {
    const { lists, dispatch } = useContext(ListContext);
    useEffect(() => {
        getLists(dispatch)
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteList(id, dispatch);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },   
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'type', headerName: 'Type', width: 120 },
        { field: 'genre', headerName: 'Genre', width: 120 },
        {
            field:"action",
            headerName:"Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>  
                        <Link 
                        to={{pathname:"/list/" + params.row._id}} 
                        state={{list: params.row}}
                        >
                            <button className="userListEdit">Edit</button>
                        </Link>

                        <DeleteIcon 
                        className="userListDelete" 
                        onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                )
            }
        }
      ];

  return (
    <div className="productList">
        <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(r) => r._id}
        />
    </div>
  )
}
