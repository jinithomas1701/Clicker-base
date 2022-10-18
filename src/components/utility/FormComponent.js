/** handler for common api field errors */
export const handleApiErrors = (errors, setState) => {
  errors &&
    errors.forEach((error) => {
      for (const [key, value] of Object.entries(error)) {
        setState({[key + 'Error']: value});
      }
    });
};
