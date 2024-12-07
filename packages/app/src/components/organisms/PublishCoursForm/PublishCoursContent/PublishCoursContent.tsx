import Button from '@/components/ui/buttons/BaseButton/BaseButton';
import { LuPlus } from 'react-icons/lu';
import ModuleForm from '../../ModuleForm/ModuleForm';

const PublishCoursContent = () => {
  return (
    <div>
      <ModuleForm />
      <div className="bg-gray-950 p-6 mt-10 rounded-lg">
        <Button variant="terciary" size="xs">
          <LuPlus className="w-5 h-5" /> Agregar Módulo
        </Button>
      </div>
    </div>
  );
};

export default PublishCoursContent;
